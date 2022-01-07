//here all logic of data layer goes to
export const initialState={
    basket:[],
    user:null
};
export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);
const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case "set_user":
            return {
                ...state,
                user:action.user,
            }
        case "add_to_basket":
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
        case "remove_from_basket":
            let newbasket=[...state.basket];
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);{
                if(index>=0)
                {
                    newbasket.splice(index,1);
                }
                else
                {
                    console.warn('cannot remove product with (id: ${action.id}) ' )
                }
            }
            return {...state,basket: newbasket};
        default:
            return state;
    }

}
export default reducer;