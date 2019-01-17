const initialState = {
    img:[],counter:0
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'IMAGECHANGE':
        console.log('reducer')
            const { target } = action.value;
            const {img} = state; 
            for(let i=0;i<target.files.length;i++){
                const singleImg={
                    imgs:URL.createObjectURL(target.files[i]),
                    name:target.files[i].name,
                    tags:'',
                    sDisabled:true,
                    iDisabled:true,
                    eDisabled:false
                }
                img.push(singleImg);
            } 
            state = {
                ...state,
                img 
            }
        break;
        case 'NAMECHANGE':
        const namec = action.val
        const index =action.i
        let temp = {...state}
        temp.img[index].name = namec
        
        
        return {...state,
            img: [...temp.img]
        }
        break;
        case 'OPTIONCHANGE':
            
            const index2 =action.i
            const tagd=action.tagsdata
            let temp2 = {...state}
            temp2.img[index2].tags = tagd
            return {...state,
                img: [...temp2.img]
            }
        break;
        case 'SAVECHANGE':
        const index3 =action.i
        let temp3 = {...state}
        temp3.img[index3].sDisabled = false;
        temp3.img[index3].iDisabled=true;
        temp3.img[index3].eDisabled=false;
        return {...state,
            img: [...temp3.img]
        }
        break;
        case 'EDITCHANGE':
        const index4 =action.i
        let temp4 = {...state}
        temp4.img[index4].sDisabled = false;
        temp4.img[index4].iDisabled=false;
        temp4.img[index4].eDisabled=true;
        return {...state,
            img: [...temp4.img]
        }
        break;
        default:
        break;
    }
    return state;
}


export default reducer;