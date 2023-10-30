
export const GiftItem = ({title, url,id}) => {
  return (
    <div className="card col-12 col-sm-5 col-lg-3 col-xl-2 col-xxl-2 col-md-3 m-1 text-white border border-dark bg-dark p-2">
        <img className="" src={url} alt= {title} />
        <p className=" text-sm text-md text-lg text-xl text-xxs text-xxxs bg-dark mt-3 text-center">{title}</p>


    </div>
  )
}
