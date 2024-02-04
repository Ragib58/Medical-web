import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90  ">
        <div className="w-full lg:w-4/5 space-y-5 mt-10 ">
           <h1 className='text-5xl font-bold leading-tight'>Empowering Health Choices for a Vibrant Life your Trusted...</h1> 
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Doloribus magnam iure repellendus aspernatur harum, itaque iste 
            id earum sapiente temporibus eum nisi, perferendis debitis quaerat 
            dolore eaque blanditiis ea eveniet.
           </p>

           <Button title="See Services" />
        </div>
    </div>
  );
};

export default Home