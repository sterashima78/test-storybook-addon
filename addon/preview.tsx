import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";

const decorator: DecoratorFunction =  (Story, context) => {
    const [{ activeMyAddon }] = useGlobals()
    useEffect(()=> {
        const selector = "my-addon-style-id"
        if(activeMyAddon) {
            const style = document.createElement("style")
            style.setAttribute("id", selector)
            style.innerHTML = "body { background: red }"
            document.head.appendChild(style)    
        } else {
            const ele = document.getElementById(selector)
            if(!ele || !ele.parentElement) return 
            ele.parentElement.removeChild(ele)
        }
    })
    return Story(context);
}
export const decorators = [
    decorator
]