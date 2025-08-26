import Button from "@/components/molecules/Button";
import {Label} from "@/components/ui/label";
import {useLogout} from "@/hooks/logout";

export default function Navbar()
{
    const logout=useLogout();
    return(<div className={"w-full h-20 bg-slate-800 shadow-xl flex items-center px-2 justify-between"}>
        <Button aria-label={"logout"}  onClick={logout}>
            Logout
        </Button>
        <Label className={"text-white"}>
            Dashboard
        </Label>
    </div>)
}
