

import author from '../../assets/Ellipse 1.svg'
import BlogCard from './BlogCard';


const Blog = () => {
    return (
        <div>
     {/* blog nav */}
           
            {/* content */}
            <div className='bg-[#FFFFFF] h-0 lg:h-[1180px] rounded-lg my-8'>
                {/* content nav */}
              

                <div className=' '>

              <div className='flex flex-col lg:flex-row justify-between my-4 mx-[10px] '>
                <h1 className='text-[24px] font-semibold justify-start mt-14 lg:mt-5'>Blog Post</h1>
               <div className='justify-end'>
                <div className='flex flex-col lg:flex-row'>
                    {/* create blog button */}
               
                {/* search button */}
                <div className='w-[300px] h-[40px] rounded-lg border-[1px] border-[rgba(0, 0, 0, 0.10)] rounded-lg bg-[#F8F8F8] flex justify-between mx-[10px] mt-5'>
      <h4 className='text-xs font-medium text-[#00000080]  ml-2 justify-start my-3.5'>Search...</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='justify-end my-3.5 mr-4'>
  <g clipPath="url(#clip0_1692_7087)">
    <path d="M14.6654 14.6654L13.332 13.332M7.66536 13.9987C8.49707 13.9987 9.32063 13.8349 10.089 13.5166C10.8574 13.1983 11.5556 12.7318 12.1437 12.1437C12.7318 11.5556 13.1983 10.8574 13.5166 10.089C13.8349 9.32063 13.9987 8.49707 13.9987 7.66536C13.9987 6.83366 13.8349 6.0101 13.5166 5.2417C13.1983 4.47331 12.7318 3.77513 12.1437 3.18702C11.5556 2.59892 10.8574 2.13241 10.089 1.81413C9.32063 1.49585 8.49707 1.33203 7.66536 1.33203C5.98566 1.33203 4.37475 1.99929 3.18702 3.18702C1.99929 4.37475 1.33203 5.98566 1.33203 7.66536C1.33203 9.34507 1.99929 10.956 3.18702 12.1437C4.37475 13.3314 5.98566 13.9987 7.66536 13.9987V13.9987Z" stroke="#636363" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1692_7087">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
    {/* Filter */}
    <div className='btn w-[86px] h-[40px] rounded lg bg-[#076A49]  mt-4' style={{background:" linear-gradient(87deg, #FD282B 9.48%, #CC176A 73.57%)"}}>
<div className='flex gap-2 my-[14px]'>

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14.6654 2H1.33203L6.66536 8.30667V12.6667L9.33203 14V8.30667L14.6654 2Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        <button className='text-[#FFFFFF] text-xs font-normal'>Filter</button>
</div>
<div>

</div>
               
                </div>

                </div>

               </div>
              </div>
                </div >
             <BlogCard></BlogCard>
                </div>
            </div>
       
    );
};

export default Blog;