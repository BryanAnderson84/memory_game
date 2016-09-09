class HomeController < ApplicationController
  def index
    @numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].shuffle
  end
end
