 'use client'
import { useAppContext } from '@/utils/context';
import { experience } from '@/utils/data';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  // const { state: { experience } } = useAppContext();
  return (
    <section id='experience'>
      <VerticalTimeline

        lineColor='red'>
        {
          experience.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{ borderRight: '7px solid #053B50' }}
                date={item.date}
              // iconStyle={{
              //   background: '#053B50',
              // }}
              // icon={item.icon}
              >
                <div >
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }

      </VerticalTimeline>
    </section >
  )
}
