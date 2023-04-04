import React, { Component, createContext } from 'react';


const Context = createContext();

export class Provider extends Component {
    constructor() {
     super();

   this.state ={
    
    projects: [
        
        
            {id:1,
                title:"project 1",
                imageUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100005419029478&tbnid=hZXpZTvoxJ-ShM&vet=12ahUKEwiTsYzQ6o3-AhXw1HMBHc37AaAQMygEegUIARCoAQ..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fsanskar.dubey.79%2F&docid=CfvepxKJBzXD4M&w=828&h=1469&q=sanskar%20dubey&ved=2ahUKEwiTsYzQ6o3-AhXw1HMBHc37AaAQMygEegUIARCoAQ",
                 excerpt:"this is my project about",
            },
    
            {id:2,
                title:"project 2",
                imageUrl:"https://burst.shopifycdn.com/photos/tablet-coffee.jpg?width=373&format=pjpg&exif=1&iptc=1",
                 excerpt:"this is my project about",
            },
    
            {id:3,
                title:"project 3",
                imageUrl:"https://burst.shopifycdn.com/photos/flatlay-of-a-coffee-mug-and-items-to-plan-travel.jpg?width=925&format=pjpg&exif=1&iptc=1",
                 excerpt:"this is my project about",
            },
            {id:4,
                title:"project 4",
                imageUrl:"https://burst.shopifycdn.com/photos/startup-desk.jpg?width=925&format=pjpg&exif=1&iptc=1",
                 excerpt:"this is my project about",
            },
            {id:5,
                title:"project 5",
                imageUrl:"https://burst.shopifycdn.com/photos/working-from-home.jpg?width=925&format=pjpg&exif=1&iptc=1",
                 excerpt:"this is my project about",
            },
            {id:6,
                title:"project 6",
                imageUrl:"https://burst.shopifycdn.com/photos/working-at-night.jpg?width=925&format=pjpg&exif=1&iptc=1",
                 excerpt:"this is my project about",
            },
    
        ],
    
    }}
    

    render(){
   
        return (
        <Context.Provider  value = {this.state} > 
         {this.props.children}
        </Context.Provider>
        
        );
    }
}



export const Consumer = Context.Consumer;
