
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router"
import { useLoginMutation } from "@/redux/features/auth/authapi"
import toast from "react-hot-toast"

type LoginFormValues = {
  email?: string
  phone?:string
  password: string
}

 function SignIn() {
  const [login]=useLoginMutation()
  const navigate =useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()

  const onSubmit = async(userData: LoginFormValues) => {
  
    const data={
      password:userData.password,
      email:userData.email,
    }
   
try {
  const result=await login(data).unwrap()
  if(result?.user?.email){
navigate("/")
    toast.success("Login Successful")
  }else{
    toast.error("Login Failed")}
} catch (error) {
   console.log(error);
    toast.error("Password or Email is incorrect")
 
}

    
  }

  return (
   <div className="flex justify-center items-center min-h-screen">
     <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Email */}
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input
              type="text"
              placeholder="m@example.com"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="grid gap-2">
            <Label>Password</Label>
            <Input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>

      <div className="flex justify-center">
        <p>If don't account Please <Link to={"/register"}><Button variant={"link"}>SignUp</Button></Link></p>
      </div>
    </Card>
   </div>
  )
}


export default SignIn
