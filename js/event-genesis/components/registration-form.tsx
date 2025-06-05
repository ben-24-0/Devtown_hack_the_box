"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"

interface RegistrationFormProps {
  onSuccess?: () => void
}

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Registration successful!",
      description: "Thank you for registering for GENESIS. You will receive a confirmation email shortly.",
    })

    setIsSubmitting(false)
    if (onSuccess) onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" required className="bg-[#252542] border-purple-800 focus:border-purple-500" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" required className="bg-[#252542] border-purple-800 focus:border-purple-500" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required className="bg-[#252542] border-purple-800 focus:border-purple-500" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company/Organization</Label>
        <Input id="company" className="bg-[#252542] border-purple-800 focus:border-purple-500" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input id="jobTitle" className="bg-[#252542] border-purple-800 focus:border-purple-500" />
      </div>

      <div className="space-y-2">
        <Label>Attendance Type</Label>
        <RadioGroup defaultValue="in-person">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="in-person" id="in-person" />
            <Label htmlFor="in-person">In-person</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="virtual" id="virtual" />
            <Label htmlFor="virtual">Virtual</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="ticketType">Ticket Type</Label>
        <Select defaultValue="standard">
          <SelectTrigger className="bg-[#252542] border-purple-800 focus:border-purple-500">
            <SelectValue placeholder="Select ticket type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard ($299)</SelectItem>
            <SelectItem value="premium">Premium ($499)</SelectItem>
            <SelectItem value="vip">VIP ($799)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" />
        <label
          htmlFor="newsletter"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Subscribe to newsletter for updates about the event
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the{" "}
          <a href="#" className="text-purple-400 hover:underline">
            terms and conditions
          </a>
        </label>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-purple-600 hover:bg-purple-700">
        {isSubmitting ? "Processing..." : "Complete Registration"}
      </Button>
    </form>
  )
}
