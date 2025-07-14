import {useEffect, useState} from "react";
import axios from "axios";
import type {IconSelectionModel} from "../models/IconSelection.ts";
import IconsConfig from "../config/Icons.config.ts";
import SingleIcon from "./SingleIcon.tsx";



export default function IconsBlock(
    {
        title = 'Icons',
        definitionFile,
        search = '',
    }: {
        title: string,
        definitionFile: string
        search?: string
    }
) {


    const [icons, setIcons] = useState<IconSelectionModel[] | null>(null);


    useEffect(() => {
        const definitionURL = 'icons_definitions/' + definitionFile + '.json';
        axios.get(definitionURL)
            .then((response: any) => {

                const icons = response.data.selection as IconSelectionModel[];
                // console.log('Icons definitions loaded:', icons);
                setIcons(icons);
            })
            .catch((error: any) => {
                console.log('Error loading icons definitions:', error);
            });
    }, []);






    const getResultedIcons = ()=>{

        if(icons === null || icons.length === 0){
            return [];
        }

        if(search=== ''){
            return icons;
        }else{
            return icons.filter((icon: IconSelectionModel) => {
                return icon.name.toLowerCase().includes(search.toLowerCase()) ;
            });
        }
    }

    if(icons === null || getResultedIcons() === null || getResultedIcons()!.length === 0) return null;

    return (
        <div className={'icons_block'}>
            <h3 custom-definition={definitionFile}>{title}</h3>
            <hr/>
            <section className="icons-list">
                {
                    getResultedIcons().map((icon:IconSelectionModel, index: number)  => (
                        <SingleIcon key={`icon${icon.name}${index}`} icon={IconsConfig.prefix + icon.name} />))
                }


            </section>
        </div>
    );
}