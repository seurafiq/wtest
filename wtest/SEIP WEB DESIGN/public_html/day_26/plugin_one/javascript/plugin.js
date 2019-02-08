function change_div_content(menu_item) {
            var heading = document.getElementById('heading');
            var image = document.getElementById('image');
            var paragraph = document.getElementById('paragraph');
            
            if(menu_item == 'home'){
                heading.innerHTML = 'this is a home heading';
            image.src = "img/one.jpg";
            paragraph.innerHTML = 'tis is a home paragraph';
            }
            
            else if(menu_item == 'about'){
                heading.innerHTML = 'this is a about heading';
            image.src = "img/two.jpg";
            paragraph.innerHTML = 'tis is a about paragraph';
            }
            
            else if(menu_item == 'contact'){
                heading.innerHTML = 'this is a contact heading';
            image.src = "img/three.jpg";
            paragraph.innerHTML = 'tis is a contact paragraph';
            }
            
            else if(menu_item == 'default'){
                heading.innerHTML = 'this is a default heading';
            image.src = "img/Mountain View.jpg";
            paragraph.innerHTML = 'tis is a default paragraph';
            }
            } 