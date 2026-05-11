import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PersonnelManagement } from "@/components/personnel-management"

export default function SettingsPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Organization Settings</h1>
                <p className="text-slate-500 mt-2">Manage your institution's profile, personnel, and compliance details.</p>
            </div>

            <Tabs defaultValue="personnel" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none pb-px bg-transparent h-auto p-0">
                    <TabsTrigger 
                        value="general" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-6 text-sm font-semibold text-slate-500 data-[state=active]:text-slate-900"
                    >
                        General Configuration
                    </TabsTrigger>
                    <TabsTrigger 
                        value="personnel" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-6 text-sm font-semibold text-slate-500 data-[state=active]:text-slate-900"
                    >
                        Personnel Management
                    </TabsTrigger>
                    <TabsTrigger 
                        value="billing" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-6 text-sm font-semibold text-slate-500 data-[state=active]:text-slate-900"
                    >
                        Billing Info
                    </TabsTrigger>
                </TabsList>
                
                <TabsContent value="general" className="p-8 border rounded-xl mt-6 bg-white shadow-sm">
                    <h2 className="text-xl font-bold mb-4">General Configuration</h2>
                    <p className="text-slate-500">Other settings will be placed here.</p>
                </TabsContent>
                
                <TabsContent value="personnel" className="pt-6">
                    <PersonnelManagement />
                </TabsContent>
                
                <TabsContent value="billing" className="p-8 border rounded-xl mt-6 bg-white shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Billing Information</h2>
                    <p className="text-slate-500">Billing details go here.</p>
                </TabsContent>
            </Tabs>
        </div>
    )
}
