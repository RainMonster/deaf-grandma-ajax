get '/' do
 
  erb :index
end
 
post '/grandma' do
  grandkid = params[:user_input]
  if grandkid == grandkid.upcase
    @grandma =  "NO NOT SINCE 1983"
  else
    @grandma = "SPEAK UP SONNY"
  end
  
  erb :grandma_says, :layout => false
end
