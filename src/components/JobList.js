import Job from './Jobs'

const JobsList = (props) => {
    return (
        <div className="jobs">
            {props.jobsArr.map((elm)=> (
                <Job job={elm} key={elm.id}/>
            ))}
        </div>
    )
}
export default JobsList