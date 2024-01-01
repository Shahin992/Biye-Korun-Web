
import searchImage from '../../../../public/image/searchnormal1.svg'
import heartImage from '../../../../public/image/heart.svg'
import cardImage from '../../../../public/image/cardImage.png'
import messageImage from '../../../../public/image/messages-2.svg'
import starImage from '../../../../public/image/star 1.svg'
import horizontalImage from '../../../../public/image/horizontal.svg'
import ellipseImage from '../../../../public/image/Ellipse 1966.svg'
const Card = () => {
    return (
        <div className='w-auto md:w-2/3 md:mx-0 lg:w-[1180px] mx-auto h-full lg:h-[874px] bg-[#F5F5F5] mt-[30px] flex '>
        <div className='m-[20px] lg:m-[30px] '>
            {/* subheader and search option */}
        <div className='flex flex-col lg:flex-row lg:w-[1120px] w-0  justify-between'>
  <div className='justify-start'>
    <h1 className='font-medium text-sm text-[#F42A41]'>Discover</h1>
    <h1 className='font-semibold text-base mt-[18px]'>Potential Partner</h1>
  </div>

  <div className="form-control lg:justify-end lg:mt-0 mt-2">
    <input type="text" className="input w-[282px] h-[50px] rounded-lg bg-[#FFFFFF]  " />
    <div>
      <img src={searchImage} className='w-[20px] h-[20px] -mt-8 m-[15px]' alt='Search Icon' />
      <h4 className='text-xs font-medium text-[#00000080] -mt-8 ml-[47px] my-[17px]'>Search</h4>
    </div>
  </div>
</div>
{/* card  */}


<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  mt-[15px] w-auto mx-auto'>
{/* row-1 */}
    {/* col-1 */}
<div className=' lg:w-[353px] h-[219px] bg-[#FFFFFF] rounded-lg mt-5'>
    <div className='flex p-5 justify-between'>

    <div className=' justify-start'>
        <img src={cardImage} className='w-[50px] h-[50px] rounded-full '></img>
    </div>
    <div >
        <div className='flex mr-32 gap-2'>

        <h3 className='text-sm font-semibold'>AR</h3>
        <p color='text-[#666666] text-xs font-normal'>#54326</p>
        </div>
        <p className='text-[#666666] text-sm font-normal mt-[10px]'>Software Engineer - Graduate</p>
        <p className='text-[#666666] text-sm font-normal'>25 years, 5ft 5 in</p>
        <div className='flex'>

        <p className='text-[#666666] text-sm font-normal '>Islam </p>
        <img src={ellipseImage} className='w-[5px] h-[5px] mt-2 mx-[3px]'></img>  
        <p className='text-[#666666] text-sm font-normal '> Dhaka, Bangladesh</p>
        </div>
    </div>
    <div className='justify-end'>

        <img src={horizontalImage}></img>
    </div>
    </div>
  
<hr className='text-[#00000026] w-[313px] mx-auto'></hr>
{/* footer of card */}
<div className='flex my-[20px] justify-evenly'>

<div className=' flex gap-4 ml-[20px] '>
    <div>
{/* heart icon */}

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={heartImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* message icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={messageImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* star icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={starImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
    </div>
{/* request button */}

<div className='w-[136px] h-[40px] justify-end ml-4'>
<button className="btn btn-active bg-[#9908F5] text-[#FFFFFF] text-sm font-normal ">Send Request</button>
</div>
</div>
</div>
{/* col-2 */}
<div className='lg:w-[353px] h-[219px] bg-[#FFFFFF] rounded-lg mt-5'>
    <div className='flex p-5 justify-between'>

    <div className=' justify-start'>
        <img src={cardImage} className='w-[50px] h-[50px] rounded-full '></img>
    </div>
    <div >
        <div className='flex mr-32 gap-2'>

        <h3 className='text-sm font-semibold'>AR</h3>
        <p color='text-[#666666] text-xs font-normal'>#54326</p>
        </div>
        <p className='text-[#666666] text-sm font-normal mt-[10px]'>Software Engineer - Graduate</p>
        <p className='text-[#666666] text-sm font-normal'>25 years, 5ft 5 in</p>
        <div className='flex'>

        <p className='text-[#666666] text-sm font-normal '>Islam </p>
        <img src={ellipseImage} className='w-[5px] h-[5px] mt-2 mx-[3px]'></img>  
        <p className='text-[#666666] text-sm font-normal '> Dhaka, Bangladesh</p>
        </div>
    </div>
    <div className='justify-end'>

        <img src={horizontalImage}></img>
    </div>
    </div>
  
<hr className='text-[#00000026] w-[313px] mx-auto'></hr>
{/* footer of card */}
<div className='flex my-[20px] justify-evenly'>

<div className=' flex gap-4 ml-[20px] '>
    <div>
{/* heart icon */}

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={heartImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* message icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={messageImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* star icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={starImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
    </div>
{/* request button */}

<div className='w-[136px] h-[40px] justify-end ml-4'>
<button className="btn btn-active bg-[#9908F5] text-[#FFFFFF] text-sm font-normal ">Send Request</button>
</div>
</div>
</div>
{/* col-3 */}
<div className=' lg:w-[353px] h-[219px] bg-[#FFFFFF] rounded-lg mt-5'>
    <div className='flex p-5 justify-between'>

    <div className=' justify-start'>
        <img src={cardImage} className='w-[50px] h-[50px] rounded-full '></img>
    </div>
    <div >
        <div className='flex mr-32 gap-2'>

        <h3 className='text-sm font-semibold'>AR</h3>
        <p color='text-[#666666] text-xs font-normal'>#54326</p>
        </div>
        <p className='text-[#666666] text-sm font-normal mt-[10px]'>Software Engineer - Graduate</p>
        <p className='text-[#666666] text-sm font-normal'>25 years, 5ft 5 in</p>
        <div className='flex'>

        <p className='text-[#666666] text-sm font-normal '>Islam </p>
        <img src={ellipseImage} className='w-[5px] h-[5px] mt-2 mx-[3px]'></img>  
        <p className='text-[#666666] text-sm font-normal '> Dhaka, Bangladesh</p>
        </div>
    </div>
    <div className='justify-end'>

        <img src={horizontalImage}></img>
    </div>
    </div>
  
<hr className='text-[#00000026] w-[313px] mx-auto'></hr>
{/* footer of card */}
<div className='flex my-[20px] justify-evenly'>

<div className=' flex gap-4 ml-[20px] '>
    <div>
{/* heart icon */}

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={heartImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* message icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={messageImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* star icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={starImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
    </div>
{/* request button */}

<div className='w-[136px] h-[40px] justify-end ml-4'>
<button className="btn btn-active bg-[#9908F5] text-[#FFFFFF] text-sm font-normal ">Send Request</button>
</div>
</div>
</div>

    {/* row 2 col-1 */}
<div className=' lg:w-[353px] h-[219px] bg-[#FFFFFF] rounded-lg mt-5'>
    <div className='flex p-5 justify-between'>

    <div className=' justify-start'>
        <img src={cardImage} className='w-[50px] h-[50px] rounded-full '></img>
    </div>
    <div >
        <div className='flex mr-32 gap-2'>

        <h3 className='text-sm font-semibold'>AR</h3>
        <p color='text-[#666666] text-xs font-normal'>#54326</p>
        </div>
        <p className='text-[#666666] text-sm font-normal mt-[10px]'>Software Engineer - Graduate</p>
        <p className='text-[#666666] text-sm font-normal'>25 years, 5ft 5 in</p>
        <div className='flex'>

        <p className='text-[#666666] text-sm font-normal '>Islam </p>
        <img src={ellipseImage} className='w-[5px] h-[5px] mt-2 mx-[3px]'></img>  
        <p className='text-[#666666] text-sm font-normal '> Dhaka, Bangladesh</p>
        </div>
    </div>
    <div className='justify-end'>

        <img src={horizontalImage}></img>
    </div>
    </div>
  
<hr className='text-[#00000026] w-[313px] mx-auto'></hr>
{/* footer of card */}
<div className='flex my-[20px] justify-evenly'>

<div className=' flex gap-4 ml-[20px] '>
    <div>
{/* heart icon */}

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={heartImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* message icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={messageImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* star icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={starImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
    </div>
{/* request button */}

<div className='w-[136px] h-[40px] justify-end ml-4'>
<button className="btn btn-active bg-[#9908F5] text-[#FFFFFF] text-sm font-normal ">Send Request</button>
</div>
</div>
</div>
{/* col-2 */}
<div className=' lg:w-[353px] h-[219px] bg-[#FFFFFF] rounded-lg mt-5'>
    <div className='flex p-5 justify-between'>

    <div className=' justify-start'>
        <img src={cardImage} className='w-[50px] h-[50px] rounded-full '></img>
    </div>
    <div >
        <div className='flex mr-32 gap-2'>

        <h3 className='text-sm font-semibold'>AR</h3>
        <p color='text-[#666666] text-xs font-normal'>#54326</p>
        </div>
        <p className='text-[#666666] text-sm font-normal mt-[10px]'>Software Engineer - Graduate</p>
        <p className='text-[#666666] text-sm font-normal'>25 years, 5ft 5 in</p>
        <div className='flex'>

        <p className='text-[#666666] text-sm font-normal '>Islam </p>
        <img src={ellipseImage} className='w-[5px] h-[5px] mt-2 mx-[3px]'></img>  
        <p className='text-[#666666] text-sm font-normal '> Dhaka, Bangladesh</p>
        </div>
    </div>
    <div className='justify-end'>

        <img src={horizontalImage}></img>
    </div>
    </div>
  
<hr className='text-[#00000026] w-[313px] mx-auto'></hr>
{/* footer of card */}
<div className='flex my-[20px] justify-evenly'>

<div className=' flex gap-4 ml-[20px] '>
    <div>
{/* heart icon */}

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={heartImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* message icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={messageImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* star icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={starImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
    </div>
{/* request button */}

<div className='w-[136px] h-[40px] justify-end ml-4'>
<button className="btn btn-active bg-[#9908F5] text-[#FFFFFF] text-sm font-normal ">Send Request</button>
</div>
</div>
</div>
{/* col-3 */}
<div className=' lg:w-[353px] h-[219px] bg-[#FFFFFF] rounded-lg mt-5'>
    <div className='flex p-5 justify-between'>

    <div className=' justify-start'>
        <img src={cardImage} className='w-[50px] h-[50px] rounded-full '></img>
    </div>
    <div >
        <div className='flex mr-32 gap-2'>

        <h3 className='text-sm font-semibold'>AR</h3>
        <p color='text-[#666666] text-xs font-normal'>#54326</p>
        </div>
        <p className='text-[#666666] text-sm font-normal mt-[10px]'>Software Engineer - Graduate</p>
        <p className='text-[#666666] text-sm font-normal'>25 years, 5ft 5 in</p>
        <div className='flex'>

        <p className='text-[#666666] text-sm font-normal '>Islam </p>
        <img src={ellipseImage} className='w-[5px] h-[5px] mt-2 mx-[3px]'></img>  
        <p className='text-[#666666] text-sm font-normal '> Dhaka, Bangladesh</p>
        </div>
    </div>
    <div className='justify-end'>

        <img src={horizontalImage}></img>
    </div>
    </div>
  
<hr className='text-[#00000026] w-[313px] mx-auto'></hr>
{/* footer of card */}
<div className='flex my-[20px] justify-evenly'>

<div className=' flex gap-4 ml-[20px] '>
    <div>
{/* heart icon */}

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={heartImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* message icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={messageImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* star icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={starImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
    </div>
{/* request button */}

<div className='w-[136px] h-[40px] justify-end ml-4'>
<button className="btn btn-active bg-[#9908F5] text-[#FFFFFF] text-sm font-normal ">Send Request</button>
</div>
</div>
</div>
 {/* row 3 col-1 */}
<div className=' lg:w-[353px] h-[219px] bg-[#FFFFFF] rounded-lg mt-5'>
    <div className='flex p-5 justify-between'>

    <div className=' justify-start'>
        <img src={cardImage} className='w-[50px] h-[50px] rounded-full '></img>
    </div>
    <div >
        <div className='flex mr-32 gap-2'>

        <h3 className='text-sm font-semibold'>AR</h3>
        <p color='text-[#666666] text-xs font-normal'>#54326</p>
        </div>
        <p className='text-[#666666] text-sm font-normal mt-[10px]'>Software Engineer - Graduate</p>
        <p className='text-[#666666] text-sm font-normal'>25 years, 5ft 5 in</p>
        <div className='flex'>

        <p className='text-[#666666] text-sm font-normal '>Islam </p>
        <img src={ellipseImage} className='w-[5px] h-[5px] mt-2 mx-[3px]'></img>  
        <p className='text-[#666666] text-sm font-normal '> Dhaka, Bangladesh</p>
        </div>
    </div>
    <div className='justify-end'>

        <img src={horizontalImage}></img>
    </div>
    </div>
  
<hr className='text-[#00000026] w-[313px] mx-auto'></hr>
{/* footer of card */}
<div className='flex my-[20px] justify-evenly'>

<div className=' flex gap-4 ml-[20px] '>
    <div>
{/* heart icon */}

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={heartImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* message icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={messageImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* star icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={starImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
    </div>
{/* request button */}

<div className='w-[136px] h-[40px] justify-end ml-4'>
<button className="btn btn-active bg-[#9908F5] text-[#FFFFFF] text-sm font-normal ">Send Request</button>
</div>
</div>
</div>
{/* col-2 */}
<div className=' lg:w-[353px] h-[219px] bg-[#FFFFFF] rounded-lg mt-5'>
    <div className='flex p-5 justify-between'>

    <div className=' justify-start'>
        <img src={cardImage} className='w-[50px] h-[50px] rounded-full '></img>
    </div>
    <div >
        <div className='flex mr-32 gap-2'>

        <h3 className='text-sm font-semibold'>AR</h3>
        <p color='text-[#666666] text-xs font-normal'>#54326</p>
        </div>
        <p className='text-[#666666] text-sm font-normal mt-[10px]'>Software Engineer - Graduate</p>
        <p className='text-[#666666] text-sm font-normal'>25 years, 5ft 5 in</p>
        <div className='flex'>

        <p className='text-[#666666] text-sm font-normal '>Islam </p>
        <img src={ellipseImage} className='w-[5px] h-[5px] mt-2 mx-[3px]'></img>  
        <p className='text-[#666666] text-sm font-normal '> Dhaka, Bangladesh</p>
        </div>
    </div>
    <div className='justify-end'>

        <img src={horizontalImage}></img>
    </div>
    </div>
  
<hr className='text-[#00000026] w-[313px] mx-auto'></hr>
{/* footer of card */}
<div className='flex my-[20px] justify-evenly'>

<div className=' flex gap-4 ml-[20px] '>
    <div>
{/* heart icon */}

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={heartImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* message icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={messageImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* star icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={starImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
    </div>
{/* request button */}

<div className='w-[136px] h-[40px] justify-end ml-4'>
<button className="btn btn-active bg-[#9908F5] text-[#FFFFFF] text-sm font-normal ">Send Request</button>
</div>
</div>
</div>
{/* col-3 */}
<div className=' lg:w-[353px] h-[219px] bg-[#FFFFFF] rounded-lg mt-5'>
    <div className='flex p-5 justify-between'>

    <div className=' justify-start'>
        <img src={cardImage} className='w-[50px] h-[50px] rounded-full '></img>
    </div>
    <div >
        <div className='flex mr-32 gap-2'>

        <h3 className='text-sm font-semibold'>AR</h3>
        <p color='text-[#666666] text-xs font-normal'>#54326</p>
        </div>
        <p className='text-[#666666] text-sm font-normal mt-[10px]'>Software Engineer - Graduate</p>
        <p className='text-[#666666] text-sm font-normal'>25 years, 5ft 5 in</p>
        <div className='flex'>

        <p className='text-[#666666] text-sm font-normal '>Islam </p>
        <img src={ellipseImage} className='w-[5px] h-[5px] mt-2 mx-[3px]'></img>  
        <p className='text-[#666666] text-sm font-normal '> Dhaka, Bangladesh</p>
        </div>
    </div>
    <div className='justify-end'>

        <img src={horizontalImage}></img>
    </div>
    </div>
  
<hr className='text-[#00000026] w-[313px] mx-auto'></hr>
{/* footer of card */}
<div className='flex my-[20px] justify-evenly'>

<div className=' flex gap-4 ml-[20px] '>
    <div>
{/* heart icon */}

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={heartImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* message icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={messageImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
{/* star icon */}
<div  className=''>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#FEEAEC"/>
</svg>
    <img src={starImage} className='w-[23px] h-[23px] -mt-8 mx-2'></img>
</div>
    </div>
{/* request button */}

<div className='w-[136px] h-[40px] justify-end ml-4'>
<button className="btn btn-active bg-[#9908F5] text-[#FFFFFF] text-sm font-normal ">Send Request</button>
</div>
</div>
</div>




</div>


            </div> 
        </div>
   
    
    );
};

export default Card;