import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { textChangeRangeIsUnchanged } from 'typescript';

library.add(fas);

const SearchBar = () => {
    const BarStyling = {width:"85%", maxWidth:"400px", background:"#F2F1F9", border:"none", padding:"1rem 1rem", margin:"0 auto"};
    
    let searchFilter = () => {
        let input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            txtValue = li[i].textContent || li[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            } else {
            li[i].style.display = "none";
            }
        }
        console.log({ input });
    };
    
    return (
        <div style={{ textAlign: 'center' }}>
            <input 
                style={BarStyling}
                key="random1"
                placeholder={'🔍   Search for news, symbols, or companies'}
                id="myInput"
                onKeyUp={searchFilter}
            />
        </div>
    );
};

export default SearchBar;