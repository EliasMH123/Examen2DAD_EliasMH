import { pool } from "../database"
const helpers=require('../libs/helpers');
export const readAllDetails=async(req,res)=>{
    try {
        const response=await pool.query('select * from detalle');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readDetails=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('select * from detalle where iddetalle=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const createDetail=async(req,res)=>{
    try {
        const{precio,cantidad,idproducto,idventa}=req.body;
        await pool.query('insert into detalle(precio,cantidad,idproducto,idventa)values($1,$2,$3,$4)',[precio,cantidad,idproducto,idventa]);
        return res.status(200).json(`Detalle registrado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const dellDetail=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('delete from detalle where iddetalle=$1',[id]);
        return res.status(200).json(`Detalle eliminado correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const updateDetail=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const{precio,cantidad,idproducto,idventa}=req.body;
        await pool.query('update detalle set precio=$1,cantidad=$2,idproducto=$3,idventa=$4 where iddetalle=$5',[precio,cantidad,idproducto,idventa,id]);
        return res.status(200).json(`Detalle actualizado correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}