def exercises
  doc = Nokogiri::HTML(open('https://wger.de/en/exercise/overview/'))
  names_list = []
  links_list = []

  names_and_links = []
  names_and_descriptions = []

  doc.css('div.tab-pane').each do |exercise_list|
    exercise_name_list = exercise_list.css('h4.media-heading')
    exercise_link_list = exercise_list.css('a')
    
    exercise_name_list.each do |exercise_name_elemment|
      name = exercise_name_elemment.text
      names_list << name
    end

   exercise_link_list.each do |exercise_link|
     link = "https://wger.de#{exercise_link['href']}"
     links_list << link
   end
  end
   
  names_list.zip(links_list).each do |name, link|
    name_and_link = {}
    name_and_link['name'] = name
    name_and_link['link'] = link

    names_and_links << name_and_link
  end

    names_and_links.each do |set|
      list_doc = Nokogiri::HTML(open("#{set['link']}"))

      description_list = list_doc.css('div.row div.col-xs-9 p')

      name_and_description = {}
      name_and_description['name'] = set['name']
      name_and_description['description'] = description_list.text

      names_and_descriptions << name_and_description

      puts names_and_descriptions
    end

end

exercises