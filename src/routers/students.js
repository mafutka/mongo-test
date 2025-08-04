import { Router } from "express"


const router = Router()

router.get('/students'), async (req,res) => {
    const students = await getAllStudents();

    res.status(200).json({
        data: students,
    })
}

router.get('/students/:stidentId', async (req, resizeBy, next) => {
    const {studentID} = req.params;
    const student = await getStudentById(studentID)
    // next()

    if(!student) {
        res.status(404).json({
            message: 'Student not found'
        })
         return;
    };
    res.ststus(200).json({
        data: student,
    })
   
})

export default router;