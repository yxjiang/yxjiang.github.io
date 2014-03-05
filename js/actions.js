//	on ready
$(function(){
  //	alert("ready");
  $('#main').tabs({
  });

  $.getJSON('data/data.json', function(data){

    //$("#map").append("");

    //	initialize home, only show top 5 news
    var news = data["news"];
    $.each(news, function(index, item){
      if(index < 4)
        $('#news-list').append("<li>" + item.time + "&nbsp;-&nbsp;" + item.description);
    });

    //	initialize publication page
    var patent = data["patent"];
    $.each(patent, function(index, item){
      var name = item["patentname"];
      var patent_status = item["patentno"];
      if(patent_status == ""){
        patent_status = item["status"];
      }
      var collaborator = item["collaborator"];
      $("#patent").append("<ul>");
      $("#patent").append("<li>" + name + ".&nbsp;" + "With " + collaborator + ". <b>" + patent_status + "</b>.</li>");
      $("#patent").append("</ul>");
    });

    var publication = data["publication"];
    $.each(publication, function(index, years){
      var byyear = years["byyear"];

      if (byyear == 'Before 2011') {
        $("#publication").append("</ul><br></br>");
        $("#publication").append(byyear);
      }

      var entry = years["publications"];
      $("#publication").append("<ul>");
      $.each(entry, function(index, pub_entry){
        var authors = pub_entry["authors"];
        authors = authors.replace("Yexi Jiang", "<strong>Yexi Jiang</strong>");
        var title = pub_entry["title"];
        var url = pub_entry["url"];
        var source = pub_entry["source"];
        var year = pub_entry["year"];
        if(url == ""){
          $("#publication").append("<li>" + authors + ".&nbsp;" + title + "</a>." + "<i> " + source + "</i>" + ", " + year + ".");
        }
        else{
          $("#publication").append("<li>" + authors + ".&nbsp;<a href=\"" + url + "\">" + title + "</a>." + "<i> " + source + "</i>" + ", " + year + ".");
        }
      });
      if (byyear == 'Before 2011') {
        $("#publication").append("</ul><br></br>");
      }
    });

    //	initialize experience page
    var experience = data["experience"];
    $.each(experience, function(index, entry){

      var institution = entry["institution"];
      var position = entry["position"];
      var time = entry["time"];
      var work = entry["work"];
      $("#experience").append("<div id='experience-elem-" + index + "' class='experience-elem'></div><br><br>");
      $("#experience-elem-" + index).append("<div id='experience-header" + index + "' class='experience-header'>" + time + "&nbsp;&nbsp;" + institution + "</div><br>");

      $.each(work, function(workIdx, content){
        var topic = content["topic"];
        var description = content["description"];
        $("#experience-elem-" + index).append("<div class='experience-topic'><b>" + topic + "</b></div>");
        $("#experience-elem-" + index).append("<div class='experience-description'>" + description + "</div>");
        $("#experience-elem-" + index).append("<br>");
      });
    });

    var services = data["services"]
    var reviewer = services["reviewer"]
    $("#services").append("<div id='reviewer'><ul id='review-list'></ul></div>");
    $.each(reviewer, function(reviewer_index, reviewer_entry) {
      $("#review-list").append("<li>" + reviewer_entry + "</li>");
    }

    //	initialize code page
    var codes = data["codes"];
    var codeshtml = new String();
    //$("#codes").append("<table border='1'>");
    $.each(codes, function(index, code_categories){
      var categoryname = code_categories["category"];
      $("#codes").append("<h3>" + categoryname + "</h3>");
      $("#codes").append("<table width='100%' border='1' id='codetable" + index + "'>");
      var list = code_categories["list"];
      $("#codetable" + index).append("<tr><th width='100'>Name</th><th width='80%'>Description</th><th>Language</th>");
      $.each(list, function(listindex, entry){
        var title = entry["title"];
        var url = entry["url"];
        var description = entry["description"];
        var language = entry["language"];
        $("#codetable" + index).append("<tr><td align='center'><a target='_blank' href='" + url + "'>" + title + "</a></td><td>" + description + "</td><td align='center'>" + language + "</td></tr>");
      });
      $("#codes").append("</table>");
      zebraTable('codetable' + index, 'odd-row-color', 'even-row-color', 'head-row-color');
    });
    //$("#codes").append("</table>");

    //	initialize personal page
    var personal = data["link"];
    $("#link").append("<table>");
    $.each(personal, function(index, link_categories){
      var link_category = link_categories["category"];
      $("#link").append("<tr><td>" + link_category + "</td></tr>");
      var links = link_categories["list"];
      $("#link").append("<tr><td><table>")
      $.each(links, function(index, entry){
        var title = entry["title"];
        var url = entry["url"];
        var description = entry["description"];
        $("#link").append("<tr><td><a href='" + url + "' target='_blank'>" + title + "</a>&nbsp;&nbsp;" + description + "</td></tr>");
      });
      $("#link").append("</td></tr></table>");
    });
    $("link").append("</table>");
  });

});

function zebraTable(tableID, oddStyle, evenStyle, headStyle){
  $('#' + tableID + ' tbody').children('tr').each(function(rowIdx, rowEntry) {
    if (headStyle != undefined && rowIdx == 0) {
      $(this).toggleClass(headStyle);
      return;
    }

    if (rowIdx % 2 == 1)
      $(this).toggleClass(oddStyle);
    else
      $(this).toggleClass(evenStyle);

    $(rowEntry).hover(
      function() {
      if (rowIdx % 2 == 1)
        $(this).toggleClass(oddStyle);
      else
        $(this).toggleClass(evenStyle);
    }, 
    function() {
      if (rowIdx % 2 == 1)
        $(this).toggleClass(oddStyle);
      else
        $(this).toggleClass(evenStyle);
    }
    );
  });
}
