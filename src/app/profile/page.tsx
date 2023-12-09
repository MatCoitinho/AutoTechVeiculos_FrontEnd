"use client";
import { Header } from "../../components/ui/header";
import Footer from "../../components/ui/footer";
import { WhatsButton } from "../../components/ui/whatsapp";
import { ProfileForm } from "../../components/ui/forms/profileForm";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import ChangePasswordDialog from "@/components/ui/changePasswordDialog";
import ListTabs from "@/components/ui/listTabs";
import { Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '@/lib/uploadImage'
import { patchDestaque } from "../api/patchDestaque";
import { patchImg } from "../api/patchImg";
import { getCliente } from "../api/getCliente";
import { getClienteEmail } from "../api/getClienteEmail";

export default function Profile() {
  // const {'AutoTech_token': token} = parseCookies()
  // const router = useRouter()

  // if(!token){
  //   router.push('/')
  // }
  // console.log(token)
  console.log(localStorage);

  const [userImg, setUserImg] = useState("/user.jpeg");
  const [bannerImg, setBannerImg] = useState("/carro.jpg");
  let email = localStorage.getItem('@autotech:user')
  let vaule = email?.replace(/["/]/g, '');
  
  const handleImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    let file

    if(files)
        file = files[0]
    if(!file) return

    const storageRef = ref(storage, `images/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
        "state_changed",
        snapshot => {
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
        },
        error => {
            alert(error)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then( url =>{
              const imagemData = {
                email: String(vaule),
                imgBanner: bannerImg === "/carro.jpg"? '':bannerImg,
                imgPerfil: url,
              }  
              patchImg(imagemData) 
                setUserImg(url)
            }
            )
        }
    )
    
  };
  const atualizaImg = async ()=>{
    const s = {
      email: 'joaopedro@gmail.com'
    }
    const data = await getClienteEmail(s)
      if(data?.data != undefined){
        setUserImg(data?.data.imgPerfil)
        setBannerImg(data?.data.imgBanner)
      }
    
  }
  useEffect(() => {
    atualizaImg();
  }, []);
  


  const handleBannerImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    let file

    if(files)
        file = files[0]
    if(!file) return

    const storageRef = ref(storage, `images/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
        "state_changed",
        snapshot => {
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
        },
        error => {
            alert(error)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then( url =>{
              
                const imagemData = {
                  email: String(vaule),
                  imgBanner: url,
                  imgPerfil: userImg === "/user.jpeg"? '':userImg,
                }  
                patchImg(imagemData)              
                setBannerImg(url)
            }
            )
        }
    )
    
  };


  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="flex  bg-black h-80 w-full relative">
        <Image
          src={bannerImg}
          alt="banner"
          layout="fill"
          className="object-cover"
        />
        <div className="w-8 h-8 absolute bottom-0 right-0">
          <Input
            type="file"
            onChange={handleBannerImg}
            accept="image/*"
            className="block w-full h-full absolute top-0 bottom-0 right-0 opacity-0 cursor-pointer"
          />
          <Edit className="w-8 h-8  cursor-pointer" />
        </div>
      </div>
      <div
        className={`w-40 h-40 bg-gray-200 absolute top-[15rem] rounded-full border-[5px] border-gray-200`}
      >
        <Image
          src={userImg}
          alt="user"
          layout="fill"
          className="rounded-full"
        />
        <div className="w-8 h-8 absolute bottom-0 right-0">
          <Input
            type="file"
            accept="image/*"
            onChange={handleImg}
            className="block w-full h-full absolute top-0 bottom-0 right-0 opacity-0 cursor-pointer"
          />
          <Edit className="w-8 h-8  cursor-pointer" />
        </div>
      </div>
      <div className="max-w-7xl w-full flex py-12 px-4 mt-20 relative">
        <div className="absolute left-10">
          <ListTabs />
        </div>

        <div className="w-96 mx-auto">
          <ProfileForm />
        </div>
        <div className="absolute right-10">
          <ChangePasswordDialog />
        </div>
      </div>
      <WhatsButton />
      <Footer />
    </main>
  );
}
