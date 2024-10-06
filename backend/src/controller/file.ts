import { Request , Response } from "express";
import uploadToCloudinary from "../utils/cloudinaryUploader";
import { v2 as cloudinary } from "cloudinary";
import { PrismaClient } from "@prisma/client";

// Upload endpoint

export const uploadFile = async(req:any,res: any) => {
    try {
        
        const { password = "",duration } = req.body;
        const file = req.files?.file;
        if(!file || !duration){
            return res.status(404).json({
                success:"false",
                message:"Inputs not enough"
            })
        }
        
        const result = await uploadToCloudinary(file,'my-files',duration);
        console.log("Upload file response :",result);
        

        const prisma = new PrismaClient();

        // }
        console.log("Duration",Number(duration));
        const dbResponse = await prisma.file.create({
            data:{
                fileUrl:result.secure_url,
                publicUrl:result.public_id,
                password:password,
                duration:parseInt(duration),
                createdAt: Date.now().toString(),
                expiredAt: new Date(Date.now() + duration * 60 * 1000).toISOString() 
            },
            select:{
                id:true,
                fileUrl:true,
                publicUrl:true,
                expiredAt:true,
            }
        });

        console.log(dbResponse);
        return res.status(200).json({
            success:true,
            message:"Uploaded",
            file:dbResponse
        })

    } catch (error) {
        console.log(error);
    }
}

// get file endpoint

export const getFile = async(req:any,res:any) => {
    try {
        const prisma = new PrismaClient();
        const {fileId} = req.params;
        console.log("Paramas",fileId);
        const result = await prisma.file.findFirst({
            where:{
                id:fileId,
            },
        });

        console.log(result);
        return res.status(200).json({
            success:true,
            message:"File fetched sucessfully",
            file:result
        })
    } catch (error) {
        console.log(error)
    }
}


//delete file
export const deleteFile = async(file:any) => {

    try {
          const prisma = new PrismaClient();
          await cloudinary.uploader.destroy(file.publicUrl);
          console.log(`Deleted expired file: ${file.publicUrl}`);

         const response =  await prisma.file.update({
            where:{
                id:file.id
            },
            data:{
                active:false
            }
          })

          console.log(response)

    } catch (error) {
        console.log(error);
    }
}