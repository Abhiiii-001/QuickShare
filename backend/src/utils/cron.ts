import cron from "node-cron";
import { v2 as cloudinary } from "cloudinary";
import { PrismaClient } from "@prisma/client";
import { deleteFile } from "../controller/file";

// Schedule a job to run every hour
const a = () => {
  cron.schedule("*/1 * * * *", async () => {
    console.log("Checking for expired files...");

    try {
      // Fetch all files with the `expires_at` context
      const result = await cloudinary.search
        .expression("context.custom.expires_at != null") // Find files with an `expires_at` field
        .execute();

      // Get current time
      const now = new Date();

      // Check each file to see if it has expired
      result.resources.forEach(async (file:any) => {
        const expiresAt = new Date(file.created_at); // Get `expires_at` from file context

        if (expiresAt <= now) {
          // If the file's expiration time has passed, delete it
          await cloudinary.uploader.destroy(file.public_id);
          console.log(`Deleted expired file: ${file.public_id}`);
        }
      });
    } catch (error) {
      console.error("Error checking for expired files:", error);
    }
  });
};


const autoDelete = () => {
  cron.schedule("*/1 * * * *", async () => {
    console.log("Checking for expired files...");

       try {
        
        const prisma = new PrismaClient();
        const expiredFiles = await prisma.file.findMany({});

        const Now = new Date(Date.now()).toISOString();

        expiredFiles.forEach((file) => {
          if(file.expiredAt <= Now && file.active === true){
            deleteFile(file);
          }
        })

       } catch (error) {
        console.log(error);
       }
  });
};

export default autoDelete;
