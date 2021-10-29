class SignupController < ApplicationController  

  def index
  end

  def create
    redirect_to profile_path
  end

end  
