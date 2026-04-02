export default function OnboardingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
            <h1 className="text-2xl font-bold">Onboarding Status</h1>
            <p className="text-muted-foreground">Track your integration progress here.</p>
            <div className="p-4 border rounded-lg bg-slate-50">
                <p>Application ID: <span className="font-mono">PENDING SUBMISSION</span></p>
            </div>
        </div>
    )
}
