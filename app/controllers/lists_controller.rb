class ListsController < ApplicationController
  def new
    @board = Board.find(params[:board_id])
  end
end
