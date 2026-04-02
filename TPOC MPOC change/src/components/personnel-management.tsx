"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Users, Mail, Smartphone, UploadCloud, AlertCircle, ShieldAlert, CheckCircle2 } from "lucide-react"

type RoleRole = "MPOC" | "TPOC"

interface Personnel {
  id: string
  name: string
  email: string
  role: RoleRole
  aadhaarStatus: "Active" | "Revoked"
}

export function PersonnelManagement() {
  const [currentUserRole, setCurrentUserRole] = useState<RoleRole>("MPOC")
  
  const [personnel, setPersonnel] = useState<Personnel[]>([
    { id: "1", name: "Anil Kumar (You)", email: "anil.k@gov.in", role: "MPOC", aadhaarStatus: "Active" },
    { id: "2", name: "Priya Sharma", email: "priya.s@gov.in", role: "TPOC", aadhaarStatus: "Active" },
    { id: "3", name: "Rahul Singh", email: "rahul.s@gov.in", role: "TPOC", aadhaarStatus: "Revoked" },
  ])

  // States for MPOC Transition Dialog
  const [isTransitionOpen, setIsTransitionOpen] = useState(false)
  const [transitionStep, setTransitionStep] = useState(1) // 1: Select, 2: OTP, 3: Success
  const [selectedSuccessor, setSelectedSuccessor] = useState("")

  // States for TPOC Elevation Dialog
  const [isElevationOpen, setIsElevationOpen] = useState(false)
  const [elevationStep, setElevationStep] = useState(1) // 1: Upload, 2: Success

  const [mobileOtp, setMobileOtp] = useState("")
  const [emailOtp, setEmailOtp] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)

  const [isRemoveOpen, setIsRemoveOpen] = useState(false)
  const [removeStep, setRemoveStep] = useState(1)
  const [tpocToRemove, setTpocToRemove] = useState("")
  const [removeOtp, setRemoveOtp] = useState("")
  const [isRemoving, setIsRemoving] = useState(false)

  const [isAddOpen, setIsAddOpen] = useState(false)
  const [addStep, setAddStep] = useState(1)
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newAadhaar, setNewAadhaar] = useState("")
  const [newAddOtp, setNewAddOtp] = useState("")
  const [isAdding, setIsAdding] = useState(false)

  const handleTransitionSubmit = () => {
    setIsVerifying(true)
    setTimeout(() => {
        setIsVerifying(false)
        setTransitionStep(3)
        setTimeout(() => {
            setIsTransitionOpen(false)
            setTransitionStep(1)
            setMobileOtp("")
            setEmailOtp("")
            // Mocking the data update
            setPersonnel(prev => prev.map(p => {
                if (p.id === selectedSuccessor) return { ...p, role: "MPOC" }
                if (p.role === "MPOC") return { ...p, role: "TPOC", name: p.name.replace(" (You)", "") }
                return p
            }))
            setCurrentUserRole("TPOC")
        }, 2000)
    }, 1500)
  }

  const handleElevationSubmit = () => {
    setElevationStep(2)
    setTimeout(() => {
        setIsElevationOpen(false)
        setElevationStep(1)
    }, 2000)
  }

  const handleRemoveSubmit = () => {
    setIsRemoving(true)
    setTimeout(() => {
        setIsRemoving(false)
        setRemoveStep(3)
        setTimeout(() => {
            setIsRemoveOpen(false)
            setRemoveStep(1)
            setRemoveOtp("")
            setPersonnel(prev => prev.filter(person => person.id !== tpocToRemove))
        }, 2000)
    }, 1500)
  }

  const handleAddSubmit = () => {
    setIsAdding(true)
    setTimeout(() => {
        setIsAdding(false)
        setAddStep(3)
        setTimeout(() => {
            setIsAddOpen(false)
            setAddStep(1)
            setNewName("")
            setNewEmail("")
            setNewAadhaar("")
            setNewAddOtp("")
            setPersonnel(prev => [...prev, { id: Math.random().toString(), name: newName, email: newEmail, role: "TPOC", aadhaarStatus: "Active" }])
        }, 2000)
    }, 1500)
  }

  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">Personnel & Roles</h2>
            {/* View Toggle for Mocking */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                <Button 
                    variant={currentUserRole === "MPOC" ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setCurrentUserRole("MPOC")}
                    className={currentUserRole === "MPOC" ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                    View as MPOC
                </Button>
                <Button 
                    variant={currentUserRole === "TPOC" ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setCurrentUserRole("TPOC")}
                    className={currentUserRole === "TPOC" ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                    View as TPOC
                </Button>
            </div>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-orange-600" />
                    Organization Administrators
                </CardTitle>
                <CardDescription>
                    Manage your Main Point of Contact (MPOC) and Technical Points of Contact (TPOC). A maximum of 1 MPOC and 3 TPOCs are allowed.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {personnel.map(p => (
                        <div key={p.id} className="flex items-center justify-between p-4 border rounded-xl hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold uppercase">
                                    {p.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                                        {p.name}
                                        {p.role === "MPOC" && <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 uppercase text-[9px] tracking-wider font-bold">MPOC</Badge>}
                                        {p.role === "TPOC" && <Badge variant="outline" className="text-slate-500 uppercase text-[9px] tracking-wider font-bold">TPOC</Badge>}
                                        {p.aadhaarStatus === "Revoked" && (
                                            <Badge variant="destructive" className="flex flex-row items-center gap-1 uppercase text-[9px] tracking-wider font-bold">
                                                <AlertCircle className="h-3 w-3" /> Aadhaar Revoked
                                            </Badge>
                                        )}
                                    </h4>
                                    <p className="text-sm text-slate-500">{p.email}</p>
                                </div>
                            </div>
                            
                            {/* Actions based on role */}
                            {currentUserRole === "MPOC" && p.role === "MPOC" && (
                                <Dialog open={isTransitionOpen} onOpenChange={setIsTransitionOpen}>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="sm" className="text-orange-600 border-orange-200 hover:bg-orange-50">
                                            Transfer MPOC Role
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Transfer MPOC Ownership</DialogTitle>
                                            <DialogDescription>
                                                This action transfers your full administrative rights to a Technical POC. You will become a TPOC.
                                            </DialogDescription>
                                        </DialogHeader>
                                        
                                        {transitionStep === 1 && (
                                            <div className="py-4 space-y-4">
                                                <div className="space-y-2">
                                                    <Label>Select Successor (Must be an active TPOC)</Label>
                                                    <select 
                                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
                                                        value={selectedSuccessor}
                                                        onChange={(e) => setSelectedSuccessor(e.target.value)}
                                                    >
                                                        <option value="" disabled>Select a TPOC</option>
                                                        {personnel.filter(p => p.role === "TPOC" && p.aadhaarStatus === "Active").map(p => (
                                                            <option key={p.id} value={p.id}>{p.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 flex gap-2">
                                                    <ShieldAlert className="h-5 w-5 text-orange-600 shrink-0" />
                                                    <p className="text-xs text-orange-800">Transferring requires Dual-Factor Authentication. Codes will be sent to your registered mobile and official organization email.</p>
                                                </div>
                                                <DialogFooter>
                                                    <Button onClick={() => setTransitionStep(2)} disabled={!selectedSuccessor} className="w-full bg-orange-600 hover:bg-orange-700">Initialize Transfer</Button>
                                                </DialogFooter>
                                            </div>
                                        )}

                                        {transitionStep === 2 && (
                                            <div className="py-4 space-y-6">
                                                <div className="space-y-4">
                                                    <div>
                                                        <Label className="flex items-center gap-2 mb-2"><Smartphone className="h-4 w-4" /> Aadhaar Linked Mobile OTP</Label>
                                                        <Input 
                                                            placeholder="Enter 6-digit OTP" 
                                                            maxLength={6} 
                                                            value={mobileOtp}
                                                            onChange={(e) => setMobileOtp(e.target.value)}
                                                        />
                                                        <p className="text-[10px] text-slate-500 mt-1">Sent to ******1234</p>
                                                    </div>
                                                    <div>
                                                        <Label className="flex items-center gap-2 mb-2"><Mail className="h-4 w-4" /> Official Org Email OTP</Label>
                                                        <Input 
                                                            placeholder="Enter 6-digit OTP" 
                                                            maxLength={6} 
                                                            value={emailOtp}
                                                            onChange={(e) => setEmailOtp(e.target.value)}
                                                        />
                                                        <p className="text-[10px] text-slate-500 mt-1">Sent to admin@org.in</p>
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <Button 
                                                        onClick={handleTransitionSubmit} 
                                                        disabled={mobileOtp.length !== 6 || emailOtp.length !== 6 || isVerifying}
                                                        className="w-full bg-orange-600 hover:bg-orange-700 transition-all"
                                                    >
                                                        {isVerifying ? "Verifying..." : "Verify & Transfer"}
                                                    </Button>
                                                </DialogFooter>
                                            </div>
                                        )}

                                        {transitionStep === 3 && (
                                            <div className="py-8 flex flex-col items-center justify-center space-y-4">
                                                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                                    <CheckCircle2 className="h-8 w-8" />
                                                </div>
                                                <h3 className="font-bold text-lg">Transfer Successful</h3>
                                                <p className="text-sm text-center text-slate-500">You are now a Technical POC. The Dashboard will reload shortly.</p>
                                            </div>
                                        )}
                                    </DialogContent>
                                </Dialog>
                            )}

                            {currentUserRole === "MPOC" && p.role === "TPOC" && (
                                <Dialog open={isRemoveOpen && tpocToRemove === p.id} onOpenChange={(open) => {
                                    setIsRemoveOpen(open);
                                    if (open) setTpocToRemove(p.id);
                                }}>
                                    <DialogTrigger asChild>
                                        <Button 
                                            variant="ghost" 
                                            size="sm" 
                                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                        >
                                            Remove
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Remove TPOC Verification</DialogTitle>
                                            <DialogDescription>
                                                You are removing {p.name}. This requires OTP authorization.
                                            </DialogDescription>
                                        </DialogHeader>
                                        {removeStep === 1 && (
                                            <div className="py-4 space-y-4">
                                                <div className="space-y-4">
                                                    <div>
                                                        <Label className="flex items-center gap-2 mb-2"><Smartphone className="h-4 w-4" /> MPOC Mobile OTP</Label>
                                                        <Input 
                                                            placeholder="Enter 6-digit OTP" 
                                                            maxLength={6} 
                                                            value={removeOtp}
                                                            onChange={(e) => setRemoveOtp(e.target.value)}
                                                        />
                                                        <p className="text-[10px] text-slate-500 mt-1">Sent to your registered mobile</p>
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <Button 
                                                        onClick={handleRemoveSubmit}
                                                        disabled={removeOtp.length !== 6 || isRemoving}
                                                        className="w-full bg-red-600 hover:bg-red-700"
                                                    >
                                                        {isRemoving ? "Verifying..." : "Verify & Remove"}
                                                    </Button>
                                                </DialogFooter>
                                            </div>
                                        )}
                                        {removeStep === 3 && (
                                            <div className="py-8 flex flex-col items-center justify-center space-y-4">
                                                <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                                                    <CheckCircle2 className="h-8 w-8" />
                                                </div>
                                                <h3 className="font-bold text-lg">TPOC Removed</h3>
                                                <p className="text-sm text-center text-slate-500">The personnel has been successfully removed.</p>
                                            </div>
                                        )}
                                    </DialogContent>
                                </Dialog>
                            )}

                            {/* TPOC Actions */}
                            {currentUserRole === "TPOC" && p.role === "MPOC" && p.role !== "MPOC" /* Logic tweak just to show */ }
                        </div>
                    ))}
                    
                    {currentUserRole === "MPOC" && personnel.filter(p => p.role === "TPOC").length < 3 && (
                        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                            <DialogTrigger asChild>
                                <Button 
                                    variant="outline" 
                                    className="w-full border-dashed"
                                >
                                    <Users className="mr-2 h-4 w-4" /> Add Technical POC
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add New Technical POC</DialogTitle>
                                    <DialogDescription>
                                        Verify the Aadhaar number of the new contact to authorize adding them.
                                    </DialogDescription>
                                </DialogHeader>
                                {addStep === 1 && (
                                    <div className="py-4 space-y-4">
                                        <div className="space-y-4">
                                            <div>
                                                <Label className="mb-2">Full Name</Label>
                                                <Input value={newName} onChange={e => setNewName(e.target.value)} placeholder="Aadhaar Matched Name" />
                                            </div>
                                            <div>
                                                <Label className="mb-2">Official Email</Label>
                                                <Input value={newEmail} onChange={e => setNewEmail(e.target.value)} placeholder="contact@organization.gov.in" />
                                            </div>
                                            <div>
                                                <Label className="mb-2">Aadhaar Number</Label>
                                                <Input value={newAadhaar} onChange={e => setNewAadhaar(e.target.value)} placeholder="1234 5678 9012" maxLength={14} />
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button 
                                                onClick={() => setAddStep(2)}
                                                disabled={!newName || !newEmail || newAadhaar.length < 12}
                                                className="w-full bg-[#1D2660] hover:bg-blue-900"
                                            >
                                                Send OTP to Aadhaar
                                            </Button>
                                        </DialogFooter>
                                    </div>
                                )}
                                {addStep === 2 && (
                                    <div className="py-4 space-y-4">
                                        <div className="space-y-4">
                                            <div>
                                                <Label className="flex items-center gap-2 mb-2"><Smartphone className="h-4 w-4" /> Aadhaar OTP</Label>
                                                <Input 
                                                    placeholder="Enter 6-digit OTP" 
                                                    maxLength={6} 
                                                    value={newAddOtp}
                                                    onChange={(e) => setNewAddOtp(e.target.value)}
                                                />
                                                <p className="text-[10px] text-slate-500 mt-1">Sent to the mobile number registered with this Aadhaar</p>
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button 
                                                onClick={handleAddSubmit}
                                                disabled={newAddOtp.length !== 6 || isAdding}
                                                className="w-full bg-orange-600 hover:bg-orange-700"
                                            >
                                                {isAdding ? "Verifying..." : "Verify & Add"}
                                            </Button>
                                        </DialogFooter>
                                    </div>
                                )}
                                {addStep === 3 && (
                                    <div className="py-8 flex flex-col items-center justify-center space-y-4">
                                        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <CheckCircle2 className="h-8 w-8" />
                                        </div>
                                        <h3 className="font-bold text-lg">TPOC Added</h3>
                                    </div>
                                )}
                            </DialogContent>
                        </Dialog>
                    )}

                    {currentUserRole === "TPOC" && (
                        <div className="mt-8 pt-6 border-t">
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-800 mb-2">Has your MPOC left the organization?</h3>
                                <p className="text-sm text-slate-600 mb-4">You can request an elevation to MPOC by providing an authorization letter signed by the Head of your Organization.</p>
                                
                                <Dialog open={isElevationOpen} onOpenChange={setIsElevationOpen}>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className="bg-white">Request Elevation to MPOC</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Request MPOC Elevation</DialogTitle>
                                            <DialogDescription>
                                                Upload an official authorization letter on company letterhead. This will be manually reviewed by the UIDAI Admin team.
                                            </DialogDescription>
                                        </DialogHeader>

                                        {elevationStep === 1 && (
                                            <div className="py-6">
                                                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 hover:bg-slate-50 hover:border-slate-300 transition-colors flex flex-col items-center justify-center text-center cursor-pointer">
                                                    <UploadCloud className="h-10 w-10 text-slate-400 mb-4" />
                                                    <p className="text-sm font-semibold text-slate-700">Click to upload file</p>
                                                    <p className="text-xs text-slate-500 mt-1">PDF only, max 5MB</p>
                                                </div>
                                                <DialogFooter className="mt-6">
                                                    <Button onClick={handleElevationSubmit} className="w-full bg-[#1D2660] hover:bg-blue-900">Submit Request</Button>
                                                </DialogFooter>
                                            </div>
                                        )}

                                        {elevationStep === 2 && (
                                            <div className="py-8 flex flex-col items-center justify-center space-y-4">
                                                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                                    <CheckCircle2 className="h-8 w-8" />
                                                </div>
                                                <h3 className="font-bold text-lg text-center">Request Submitted</h3>
                                                <p className="text-sm text-center text-slate-500">Ticket #REQ-88992 created. Please allow 48 hours for review.</p>
                                            </div>
                                        )}
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
