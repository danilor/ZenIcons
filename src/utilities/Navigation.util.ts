const NavigationUtil = {
    scroll:(id: string)=>{
        document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
    }
}

export default NavigationUtil;