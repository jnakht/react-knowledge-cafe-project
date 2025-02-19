import ProfilePic from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mt-4 mb-4'>
            <h3 className='text-[#111] text-4xl font-bold '>React Knowledge Cafe</h3>
            <img className='w-[50px]' src={ProfilePic} alt="" />
            
        </div>
    );
};

export default Header;