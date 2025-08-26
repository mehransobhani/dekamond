import Button from "@/components/molecules/Button";
import {Label} from "@/components/ui/label";

export default function Navbar()
{
    return(<div className={"w-full h-20 bg-slate-800 shadow-xl flex items-center px-2 justify-between"}>
        <Button>
            Logout
        </Button>
        <Label className={"text-white"}>
            Dashboard
        </Label>
    </div>)
}
