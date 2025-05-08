import { SigninForm } from "@/components/auth/signin-form";

export default function Page(){
return(
<div className="max-w-lg mx-auto mt-12 px-6">
<h1 className="mt-10 text-2xl">Login</h1>
<div className="mt-10 mb-14 flex flex-col gap-6">
    <SigninForm/>
</div>
</div>
)
}