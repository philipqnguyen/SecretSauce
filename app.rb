require 'sinatra'

set :port, 4000

get '/' do
  redirect '/index.html'
end

get '/decode/?' do
  redirect '/decode.html'
end
