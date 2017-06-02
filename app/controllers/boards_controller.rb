class BoardsController < ApplicationController
  def new
    @board = Board.new
  end

  def create
    @board = Board.new(name: params[:board][:name], manager: current_user.name)
    if @board.save

    else

    end
  end
end
