class BoardsController < ApplicationController
  def new
    @board = Board.new
  end

  def create
    @board = Board.new(board_params)
    if @board.save

    else

    end
  end

  private

  def board_params
    params.require(:board).permit(:name).merge(user: current_user)
  end
end
