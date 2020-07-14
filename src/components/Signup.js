import React, { Component } from 'react';

class Signup extends Component {
    constructor(){
        super();
        this.state = {
          email:'',
          password:'',
          formComplete: false
        }
      }
    
    render() {
        return (
            <div className='wrapper'>
                <h1 className='header'>Yay, we love cats! Give us the basics about your cat</h1>

                <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FVideo-Creator%2FKittisaurus-110462290398776%2F&psig=AOvVaw0ShQqXN1D_0tgWdjYkDe-R&ust=1594790136865000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOil7bL-y-oCFQAAAAAdAAAAABAD'/>

                <form className='sign-up'>
                    <label className='name'> Name</label>
                    <input className='name' type='text'  value=''  placeholder='Pets Name'></input>

                    <label className='pho'> Upload a Photo </label>
                    <input className='pho' type='file' value='' accept='image.jpg, image.png'  placeholder='Pets Breed'></input>

                    <label className='breed'> Breed</label>
                    <input className='breed' type='text'  value=''  placeholder='Pets Breed'></input>

                    <label className='date'> Birthday</label>
                    <input className='date' type='date'  value=''  placeholder='MM/DD/YYYY'></input>
                    

                </form>

                <button className='btn'> Back </button>
                <button className='btn'> Next </button>

            </div>
        );
    }
}

export default Signup;