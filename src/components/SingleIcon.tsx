import Swal from 'sweetalert2'

export default function SingleIcon(
    {
        icon,
    }: {
        icon: string,
    }
){

    const clickOnIcon: ()=>void = (): void =>{

        navigator.clipboard.writeText(`<i class="${icon}"></i>`);

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
        });
        Toast.fire({
            icon: "success",
            // title: `Icon ${icon} copied to your clipboard`,
            html: `Icon <i class="${icon}"></i> copied to your clipboard!`,
        });
    }

    return (
        <div onClick={clickOnIcon} className="icon" title={icon}><span className={icon}></span></div>
    );
}