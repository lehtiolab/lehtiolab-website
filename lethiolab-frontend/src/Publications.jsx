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
      publicationByYear[i].forEach((publication) => {
        var publicationAuthours = []
        publication.publicationAuthors.forEach((authour, idx, array) => {
          if (idx === array.length - 1) {
            if (authour.includes("*")) {
              publicationAuthours.push(<span className="groupAuthour text-xl font-bold">{authour.replace("*","")}</span>)
            } else {
              publicationAuthours.push(authour)
            }
          } else {
            if (authour.includes("*")) {
              publicationAuthours.push(<span className="groupAuthour text-xl font-bold">{authour.replace("*","")}, </span>)
            } else {
              publicationAuthours.push(authour+", ")
            }
          }
        })
        publicationYearEntries.push(<div className="publicationEntry text-left gap-4 flex flex-row ">
          <div className="publicationText">
            <Link className="publicationTitle text-3xl text-left" to={publication.publicationLink} target="_blank">{publication.publicationTitle}</Link>
            <div className="publicationJournalTime text-black italic text-lg">{publication.publicationJournal}, {publication.publicationDate}</div>
            <div className="publicationAuthours text-black text-lg text-justify">{publicationAuthours}</div>
          </div>
          <div className="publicationImage"
          ><img src={publication.publicationImage}/></div>
      </div>)
      })
      publicationGrid.push(<div className="publicationYear" id={"year-"+i}>
        <div className="yearTitle text-5xl text-left">{i}</div><div className="publicationList bg-white flex flex-col gap-1 p-2 rounded">{publicationYearEntries}</div></div>)
    }
  }
  return (
    <div className="flex flex-col w-11/12 mt-2 mb-20 h-fit ml-auto mr-auto gap-5">
    {publicationGrid}
    </div>
  )
}

export default Publications