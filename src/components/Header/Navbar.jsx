function Navbar() {
  return (
    <div className="w-full px-8 py-5 flex justify-between items-center">
      <div className="brand flex gap-3 items-center">
        <div className="logo w-8 h-8 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 relative after:w-5 after:h-5 after:bg-black after:rounded-sm after:inset-5 after:absolute after:top-1.5 after:left-1.5"></div>
        <span className="">Lustro Slideshow</span>
      </div>
      <div className="pagination">
        <span>pages</span>
      </div>
    </div>
  )
}

export default Navbar