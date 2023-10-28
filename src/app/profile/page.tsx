'use client'
import { Header } from '../../components/ui/header'
import Footer from '../../components/ui/footer'
import { WhatsButton } from '../../components/ui/whatsapp'
import { ProfileForm } from "../../components/ui/forms/profileForm"

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className='flex bg-red-900 h-80 w-full'/>
      <div className='w-40 h-40 bg-gray-200 absolute top-[15rem] rounded-full border-[5px] border-gray-200 bg-[url("/user.jpeg")] bg-cover'/>
      <div className='max-w-7xl w-full flex flex-col py-12 px-4 mt-20'>
        <div className='w-96 mx-auto'>
          <ProfileForm/>
        </div>
      </div>
      <WhatsButton />
      <Footer />
    </main>
  )
}
