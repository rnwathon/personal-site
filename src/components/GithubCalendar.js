import React, {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap';
import Calendar from 'react-github-contribution-calendar';

const GithubCalendar = () => {
  let [calendarData, setCalendarData] = useState({})
  let [lastDate, setLastDate] = useState()

  useEffect(() => {
    fetch("https://ancient-butterfly.herokuapp.com/v3/rnwathon?y=lastYear")
    .then(res => res.json())
    .then(res => {
      if(res){
        const contributions = res.contributions
        let data = {}

        for(let i = 0; i < contributions.length; i++){
          const contribution = contributions[i]
          data[contribution.date] = contribution.level
        }

        setCalendarData(data)
        setLastDate(contributions[contributions.length-1].date)
      }
    })
  }, [])

  var panelColors = [
    '#e6eaf5',
    '#9aa9d5',
    '#677ec0',
    '#3553ab',
    '#022896'
  ];

  return(
    <Card className="bg-glass shadow-sm d-flex align-items-center">
      <Card.Body>
        <div className="github-calendar">
          <Calendar values={calendarData} until={lastDate} panelColors={panelColors}/>
        </div>
      </Card.Body>
    </Card>
  )
}

export default GithubCalendar