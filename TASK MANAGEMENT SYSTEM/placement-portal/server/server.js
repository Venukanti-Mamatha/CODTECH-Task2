const express = require('express');
const mongoose = require('mongoose');
const comps = require('./companymodel')
const jwt = require('jsonwebtoken');
const middleware = require('./middleware')
const cors = require('cors');
const users = require('./usermodel');
const appliedcomps = require('./appliedcomps');
const Complaint=require('./complaints');


const app = express();
mongoose.connect('mongodb+srv://mamatha:JUz0OVGNgFMwiSYm@myatlasclusteredu.xsavamt.mongodb.net/placementportal?retryWrites=true&w=majority')
.then(
    ()=> console.log('Db connected..')
)
//mongodb+srv://vavelalapallavi:1RS9ge1u3lrqgv55@cluster0.ktjhrac.mongodb.net/placementcell?retryWrites=true&w=majority
const router = express.Router(); 
app.use(express.json());

app.use(cors({origin:"*"}));
const PORT = 5000;



app.post('/register',async (req,res) =>{
    try{
        const { fullname,collegeId,branch,email,mobile,github,linkedin,password,confirmpassword } = req.body;
        const exist = await users.findOne({email});
        if(exist){
            return res.status(200).send('This ID has already been Registered')
        }
        const existId = await users.findOne({collegeId});
        if(existId){
            return res.status(200).send('This ID has already been Registered')
        }
        if(password !== confirmpassword){
            return res.status(400).send('Invalid Password')
        }

        let newUser = new users({
            fullname,collegeId,branch,email,mobile,github,linkedin,password,confirmpassword
        })
        newUser.save();
        return res.status(200).send('User has been Registered Successfully')
    }
    catch(err){
        console.log(err)
        return res.status(500).send('Register Server Error')
    }
})





app.post('/login',async (req,res)=>{
    try{
        const {email,password} = req.body;
        const exist = await users.findOne({email})
        if(!exist){
            return res.status(200).send('User does not exist please register')
        }
        if(exist.password !== password){
            return res.status(200).send('Invalid Password')
        }
        let payload = {
            user : {
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtPassword',{expiresIn:360000000},
        (err,token)=>{
            if(err) throw err
            return res.json({token})
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Login Server Error')
    }
})




app.get('/getcomp',async(req,res)=>{
    try{
        return res.json(await comps.find())
    }
    catch(err){
        console.log(err);
        return res.send("getcomp server error")
    }
})


app.post('/registercomp',async (req,res)=>{
    try{
        const {compname,compId,clgId,salary,studentId,studentname} = req.body;
        const newRegisteration = new appliedcomps({
            compname:compname,
            compId:compId,
            studentname:studentname,
            studentId:studentId,
            clgId:clgId,
            salary:salary
        })
        await newRegisteration.save();
        return res.status(200).send('Registered Company Added Successfully')
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Login Server Error')
    }
})


app.get('/getpresentuser',middleware,async(req,res)=>{
    try{
        const userid = req.user.id
        const exist = await users.findById(userid)
        return res.status(200).json(exist);

    }
    catch(err){
        console.log(err);
        return res.status(500).send('getpresentuser Server Error')
    }
})



app.get('/indcompprofile/:id',async(req,res)=>{
    try{
        const exist = await comps.findById(req.params.id)
        return res.status(200).json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('ind comp Server Error')
    }
})

app.get('/indregcompprofile/:id',async(req,res)=>{
    try{
        const exist = await appliedcomps.findById(req.params.id)
        return res.status(200).json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('ind comp Server Error')
    }
})

app.get('/getregisteredcompanies',middleware,async(req,res)=>{
    try{
        const userid = req.user.id
        const exist = await appliedcomps.find()
        const filtered = exist.filter(profile => profile.studentId === userid)
        return res.status(200).json(filtered);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('ind comp Server Error')
    }
})

app.put('/updatewrittentest/:id',async(req,res) =>{
    try{
        const updated = await appliedcomps.findByIdAndUpdate(req.params.id,{
            
            writtentest : "1",
            
        })
        return res.status(200).json("Successfully Updated");
    }
    catch(err){
        console.log(err);
        return res.status(500).send('ind comp Server Error')
    }
})

app.put('/updatetechnicalround/:id',async(req,res) =>{
    try{
        const updated = await appliedcomps.findByIdAndUpdate(req.params.id,{
            
            technicalround : "1",
            
        })
        return res.status(200).json("Successfully Updated");
    }
    catch(err){
        console.log(err);
        return res.status(500).send('ind comp Server Error')
    }
})

app.put('/updatehrround/:id',async(req,res) =>{
    try{
        const updated = await appliedcomps.findByIdAndUpdate(req.params.id,{
            
            hrround : "1",
            
        })
        return res.status(200).json("Successfully Updated");
    }
    catch(err){
        console.log(err);
        return res.status(500).send('ind comp Server Error')
    }
})
/*app.post('/complaints', async (req, res) => {
    try {
      const { selectedLab, complaintText, supervisorView, LabNumber, DepartmentName } = req.body;
      const newComplaint = new Complaint({
        selectedLab,
        complaintText,
        supervisorView,
        LabNumber,
        DepartmentName,
      });
      await newComplaint.save();
      res.status(201).json({ message: 'Complaint submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get('/complaints', async (req, res) => {
    try {
      const complaints = await Complaint.find();
      res.json(complaints);
    } catch (error) {
      console.error('Error fetching complaints:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.put('/complaints/:complaintId', async (req, res) => {
    try {
      const { complaintId } = req.params;
      const { status } = req.body;
  
      // Update the complaint with the provided ID
      const updatedComplaint = await Complaint.findByIdAndUpdate(
        complaintId,
        { status },
        { new: true } // This option ensures that the updated complaint is returned
      );
  
      if (!updatedComplaint) {
        return res.status(404).json({ error: 'Complaint not found' });
      }
  
      res.json(updatedComplaint);
    } catch (error) {
      console.error('Error updating complaint status:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
app.listen(5000,()=> console.log('Server is Running..'))
app.use(express.json());

// Handle POST request to submit a complaint
app.post('/complaints', async (req, res) => {
    try {
      const { selectedLab, complaintText, supervisorView, LabNumber, DepartmentName } = req.body;
  
      // Check if all required fields are provided
      if (!selectedLab || !complaintText || !LabNumber || !DepartmentName) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      // Create a new Complaint document
      const newComplaint = new Complaint({
        selectedLab,
        complaintText,
        supervisorView,
        LabNumber,
        DepartmentName,
      });
  
      // Save the complaint to the database
      await newComplaint.save();
  
      // Respond with a success message
      res.status(201).json({ message: 'Complaint submitted successfully' });
    } catch (error) {
      console.error('Error submitting complaint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Handle GET request to retrieve all complaints
  app.get('/complaints', async (req, res) => {
    try {
      // Retrieve all complaints from the database
      const complaints = await Complaint.find();
  
      // Respond with the list of complaints
      res.json(complaints);
    } catch (error) {
      console.error('Error fetching complaints:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Handle PUT request to update a complaint status
  app.put('/complaints/:complaintId', async (req, res) => {
    try {
      const { complaintId } = req.params;
      const { status } = req.body;
  
      // Update the complaint with the provided ID
      const updatedComplaint = await Complaint.findByIdAndUpdate(
        complaintId,
        { status },
        { new: true } // This option ensures that the updated complaint is returned
      );
  
      // Check if the complaint was found and updated
      if (!updatedComplaint) {
        return res.status(404).json({ error: 'Complaint not found' });
      }
  
      // Respond with the updated complaint
      res.json(updatedComplaint);
    } catch (error) {
      console.error('Error updating complaint status:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  /*app.get('/complaints', async (req, res) => {
    try {
      const complaints = await Complaint.find();
      res.json(complaints);
    } catch (error) {
      console.error('Error fetching complaints:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Route to retrieve all submitted complaints
router.get('/complaints', async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
*/
// Handle POST request to submit a complaint
/*app.post('/complaints', async (req, res) => {
    try {
      const { selectedLab, complaintText, supervisorView, LabNumber, DepartmentName } = req.body;
  
      // Check if all required fields are provided
      if (!selectedLab || !complaintText || !LabNumber || !DepartmentName) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      // Create a new Complaint document
      const newComplaint = new Complaint({
        selectedLab,
        complaintText,
        supervisorView,
        LabNumber,
        DepartmentName,
      });
  
      // Save the complaint to the database
      await newComplaint.save();
  
      // Respond with a success message
      res.status(201).json({ message: 'Complaint submitted successfully' });
    } catch (error) {
      console.error('Error submitting complaint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Handle GET request to retrieve all complaints
  app.get('/complaints', async (req, res) => {
    try {
      // Retrieve all complaints from the database
      const complaints = await Complaint.find();
  
      // Respond with the list of complaints
      res.json(complaints);
    } catch (error) {
      console.error('Error fetching complaints:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.use('/', router);
*/

app.post('/complaints', async (req, res) => {
  try {
    const { selectedLab, complaintText, supervisorView, LabNumber, DepartmentName } = req.body;
    const newComplaint = new Complaint({
      selectedLab,
      complaintText,
      supervisorView,
      LabNumber,
      DepartmentName,
    });
    await newComplaint.save();
    res.status(201).json({ message: 'Complaint submitted successfully' });
  } catch (error) {
    console.error('Error submitting complaint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define route to fetch all complaints
app.get('/complaints', async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


  
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));