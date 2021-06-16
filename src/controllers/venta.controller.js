import {pool} from "../database"
export const readAllVenta=async(req,res)=>{
    try {
        const response=await pool.query('select * from venta');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readVenta=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('select * from venta where idventa=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const createVenta=async(req,res)=>{
    try {
        const{fecha,tipodoc,numdoc,idcliente,idusuario,idempleado}=req.body;
        await pool.query('insert into venta(fecha,tipodoc,numdoc,idcliente,idusuario,idempleado)values($1,$2,$3,$4,$5,$6)',[fecha,tipodoc,numdoc,idcliente,idusuario,idempleado]);
        return res.status(200).json(`Venta realizada`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const delVenta=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('delete from venta where idventa=$1',[id]);
        return res.status(200).json(`Venta eliminada correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const updateVenta=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const{fecha,tipodoc,numdoc,idcliente,idusuario,idempleado}=req.body;
        await pool.query('update venta set fecha=$1,tipodoc=$2,numdoc=$3,idcliente=$4,idusuario=$5,idempleado=$6 where idventa=$7',[fecha,tipodoc,numdoc,idcliente,idusuario,idempleado,id]);
        return res.status(200).json(`Venta Modificada.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}