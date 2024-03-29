import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType;
    onclick?: () => void;
}

// Componente para exibir um item na barra lateral com um ícone e um rótulo
const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon,
    onclick
}) => {

    const router = useRouter();

    // Função para lidar com o clique no item da barra lateral
    const handleClick = useCallback(() => {
        if (onclick) {
            return onclick();
        } else if (href) {
            router.push(href);
        }
    }, [router, href, onclick]);


    return (
        <div onClick={handleClick} className="flex flex-row items-center">
            {/* Telas menores */}
            <div className="
        rounded-full relative
        h-14 w-14 p-4 flex 
        items-center justify-center 
        hover:bg-blue-300 hover:bg-opacity-10
        cursor-pointer transition lg:hidden">
                <Icon size={25} color="white" />
            </div>

            {/* Telas maiores */}
            <div className="
        rounded-full relative
        gap-4 p-4 hidden lg:flex 
        items-center justify-center 
        hover:bg-blue-300 hover:bg-opacity-10
        cursor-pointer transition ">
                <Icon size={25} color="white" />
                <p className=" lg:block text-white text-xl">
                    {label}
                </p>
            </div>
        </div>
    );
}

export default SidebarItem;