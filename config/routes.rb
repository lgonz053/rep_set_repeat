Rails.application.routes.draw do
  namespace :api do
    post '/users' => 'users#create'

    post '/sessions' => 'sessions#create'

    get "/workouts" => "workouts#index"
    post "/workouts" => "workouts#create"
    get "/workouts/:id" => "workouts#show"
    patch "/workouts/:id" => "workouts#update"
    delete "/workouts/:id" => "workouts#destroy"
  end
end
