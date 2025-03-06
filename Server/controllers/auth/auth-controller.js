const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User')


const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {

    const checkUser = await User.findOne({ email })
    if (checkUser) {
      return res.json({
        success: false,
        message: "User already exists with the same email! Please try again with another email"
      })
    }  
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    })
    await newUser.save();
    res.status(200).json({
      success: true,
      message: 'registration success'
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'some error occured'
    })
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email })
    if (!checkUser) {
      return res.json({
        success: false,
        message: "No user found! Please register first"
      })
    }
    const checkPasswordmatch = await bcrypt.compare(password, checkUser.password)
    if (!checkPasswordmatch) {
      return res.json({
        success: false,
        message: "Incorrect Password! Please try again"
      })
    }

    const token = await jwt.sign({
      id: checkUser._id, role: checkUser.role, email: checkUser.email
    }, 'CLIENT_SECRET_KEY', { expiresIn: '60mins' });

    res.cookie('token', token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id
      }
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'some error occured'
    })
  }
}

const logoutUser =(req,res)=>{
  res.clearCookie('token').json(
    {
      success:true,
      message:"logout successfully"
    }
  )
}


const authMiddleware=async(req,res,next)=>{
  const token=req.cookies.token;
  if(!token){
    return res.status(401).json({
      success:false,
      message:"Unauthorised User!"
    })
  }
  try{
      
    const decoded=await jwt.verify(token,'CLIENT_SECRET_KEY');
    req.user=decoded
    next();

  }catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'some error occured'
    })
  }
}

module.exports = { registerUser,loginUser,logoutUser,authMiddleware };