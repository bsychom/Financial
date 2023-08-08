import blog1 from '../img/blog1.jpg'
import blog2 from '../img/blog2.jpg'
import blog3 from '../img/blog3.jpg'
import Image from 'next/image';
const Blog = () =>{
    return (
        <section id="blog" className=" bg-color-primary-light">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className="capitalize font-bold text-color-secondary mb-4">inovation and quality improvement</h4>
                    <h1 className="capitalize title">latest updates, solutions and company news</h1>    
                </div>
           </div>
           <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 px-6 pb-4'>
            <div>
                <div className='lg:h-[40vh] rounded-xl scale-100 overflow-hidden '>
                    <Image src={blog1} alt='img' className='lg:h-full w-full hover:scale-125 transition duration-300 cursor-pointer'/>

                </div>
            </div>
            <div>
                <div className='lg:h-[40vh] rounded-xl scale-100 overflow-hidden '>
                    <Image src={blog2} alt='img' className='lg:h-full w-full hover:scale-125 transition duration-300 cursor-pointer'/>

                </div>
            </div>
            <div>
                <div className='lg:h-[40vh] rounded-xl scale-100 overflow-hidden '>
                    <Image src={blog3} alt='img' className='lg:h-full w-full hover:scale-125 transition duration-300 cursor-pointer'/>

                </div>
            </div>

           </div>

        </section>
    );
}
export default Blog;

