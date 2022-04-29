import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'

import './index.css'

const JobItemDetailsRoute = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    rating,
    title,
    packagePerAnnum,
  } = jobData
  return (
    <li className="job-details-li">
      <div className="job-item-header">
        <img className="job-title-logo" src={companyLogoUrl} alt={id} />
        <div className="title-rating-container">
          <h1 className="job-title-heading">{title}</h1>
          <div className="rating-star-container">
            <AiFillStar className="rating-icon" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
      <div className="location-package-container">
        <div className="location-package-left">
          <MdLocationOn className="location-icon" />
          <p className="location">{location}</p>
          <BsBriefcaseFill className="bag-icon" />
          <p>{employmentType}</p>
        </div>
        <p className="annual-package">{packagePerAnnum}</p>
      </div>
      <hr className="hr-job-line" />
      <h1 className="job-description-text">Description</h1>
      <p>{jobDescription}</p>
    </li>
  )
}

export default JobItemDetailsRoute
