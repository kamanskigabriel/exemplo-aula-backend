import express from "express";

const app = express();

app.use(express.json())

app.post("/api/v1/atv1", (req, res) => {
   const {num1, num2} = req.body
   const resultado = Number(num1) + Number(num2)
  
    res.send({ message : resultado})
})
app.post("/api/v1/atv2", (req, res) => {
    const {horas, dinheiro} = req.body
    const resultado = Number(horas) * Number(dinheiro)
    res.send({ message : resultado})
})
app.post("/api/v1/atv3", (req, res) =>{
    const {p1, p2, p3, p4, p5} = req.body
    const media = (Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5))
    res.send({message: media})
})
app.post("/api/v1/atv4", (req, res) =>{
    const temp = req.body
    const fah = (9 * Number(temp)* + 100 )/5
})
app.post("/api/v1/atv5", (req, res) =>{
    const km = req.body
    const milhas = Number(km) * 1.60934

})
app.post("/api/v1/atv6", (req, res) =>{
     const tempo = req.body
    const resultado1 = Number(tempo)
    const resultado2 = Number(tempo) / 60
    const resultado3 = Number(tempo) / 3600
})
    app.listen(3000, () => {
    console.log("serve in port 3000")
})
