get '/entries' do
  @entries = Entry.order(:created_at)
  erb :'entries/index'
end

get '/entries/new' do
    if request.xhr?
      erb :"entries/_new_form", layout: false
    else
      erb :'entries/new'
    end

end

post '/entries' do
  @entry = Entry.new(params[:entry])
  if @entry.save
    if request.xhr?
      erb :"entries/_entry_list_item", layout: false, locals: { entry: @entry }
    else
      redirect "/entries/#{@entry.id}"
    end
  else
    @errors = @entry.errors.full_messages
    if request.xhr?
    else
      erb :'entries/new'
    end
  end
end

get '/entries/:id' do
  @entry = Entry.find(params[:id])
  if request.xhr?
    erb :"entries/_show", layout: false, locals: { entry: @entry }
  else
    erb :'entries/show'
  end
end

get '/entries/:id/edit' do
  @entry = Entry.find(params[:id])
  if request.xhr?
    erb :"entries/_edit", layout: false, locals: { entry: @entry }
  else
    erb :'entries/edit'
  end
end

put '/entries/:id' do
  entry = Entry.find(params[:id])
  entry.update_attributes(params[:entry])
  if request.xhr?
    erb :"entries/_entry_list_item", layout: false, locals: { entry: entry }
  else
    redirect "/entries/#{@entry.id}"
  end
end

delete '/entries/:id' do
  entry = Entry.find(params[:id])
  entry.destroy
  redirect '/entries'
end