import React from 'react';
import { Link } from 'react-router-dom';
import { publications } from "./assets/data/publications";
import "./styles/publications.scss"

const Publications = () => {

  // Sort publications by date
  publications.sort(function(a,b) {
    var aa = a.publicationDate.split("/").reverse().join();
    var bb = b.publicationDate.split("/").reverse().join();
    return aa<bb ? -1 : (aa > bb ? 1: 0)
  })

  // Organise publications into years
  var publicationByYear = {}
  publications.forEach((publication) => {
    if (publicationByYear.hasOwnProperty(publication.publicationDate.split("/")[2])) {
      publicationByYear[publication.publicationDate.split("/")[2]].push(publication)
    } else {
      publicationByYear[publication.publicationDate.split("/")[2]] = [publication]
    }
  }
  )

  // Loop through the objects in a order from the first year to the current and populate grid.
  var publicationGrid = []
  for (let i=new Date().getFullYear(); i>=2011; i--) {
    if (publicationByYear[i]) {
      var publicationYearEntries = []
      var imageSide = 1
      publicationByYear[i].forEach((publication) => {
        if (imageSide % 2 === 0) {
          var textOrder = 2
          var imageOrder = 1
        } else {
          var textOrder = 1
          var imageOrder = 2
        }
        var publicationAuthours = []
        publication.publicationAuthors.forEach((authour, idx, array) => {
          if (idx === array.length - 1) {
            if (authour.includes("*")) {
              publicationAuthours.push(<span className="groupAuthour font-bold">{authour.replace("*","")}</span>)
            } else {
              publicationAuthours.push(authour)
            }
          } else {
            if (authour.includes("*")) {
              publicationAuthours.push(<span className="groupAuthour font-bold">{authour.replace("*","")}, </span>)
            } else {
              publicationAuthours.push(authour+", ")
            }
          }
        })
        publicationYearEntries.push(<div className="publicationEntry text-left gap-4 flex flex-row pb-5">
          <div className="publicationText" style={{order: textOrder}}>
            <Link className="publicationTitle text-left" to={publication.publicationLink} target="_blank">{publication.publicationTitle}</Link>
            <div className="publicationJournalTime text-black italic ">{publication.publicationJournal}, {publication.publicationDate}</div>
            <div className="publicationAuthours text-black text-justify">{publicationAuthours}</div>
          </div>
          <div className="publicationImage" style={{order: imageOrder}}
          ><img src={publication.publicationImage}/></div>
      </div>)
      imageSide += 1
      })
      publicationGrid.push(<div className="publicationYear" id={"year-"+i}>
        <div className="yearTitle text-left">{i}</div><div className="publicationList bg-white flex flex-col gap-1 p-2 rounded pl-10 pr-10">{publicationYearEntries}</div></div>)
    }
  }
  return (
    <div className="flex flex-col w-8/12 mt-2 mb-20 h-fit ml-auto mr-auto gap-5 pt-14">
    {publicationGrid}
    </div>
  )
}

export default Publications